import React from "react";
import InputComponent from "../inputComponent/InputComponent";
import NotesTable from "../NotesTable/NotesTable";
import "./Main.css";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billAmount: "",
            cashGiven: "",
            alert: false,
            countOfNotes: [],
        };
    }

    billAmountHandler = (inputData) => {
        this.setState({
            billAmount: inputData,
        });
    };

    cashAmountHandler = (inputData) => {
        this.setState({
            cashGiven: inputData,
        });
    };

    calculateNotesNeeded = (amountToReturn) => {
        // sorted from high to low -> greedily pick
        const notesNeeded = [];
        const denominations = [2000, 500, 100, 20, 10, 5, 1];
        for (let i = 0; i < denominations.length; i += 1) {
            notesNeeded[i] = Math.floor(amountToReturn / denominations[i]);
            amountToReturn %= denominations[i];
        }
        return notesNeeded;
    };

    onClickHandler = () => {
        const { billAmount, cashGiven } = this.state;
        const amountToReturn = cashGiven - billAmount;
        if (amountToReturn > 0) {
            this.setState({
                countOfNotes: this.calculateNotesNeeded(amountToReturn),
            });
        } else {
            this.setState({
                alert: true,
            });
        }
    };

    validateInput = () => {
        const { billAmount, cashGiven } = this.state;
        return (
            billAmount !== "" && cashGiven !== "" && !this.isNegativeInputs()
        );
    };

    isNegativeInputs = () => {
        const { billAmount, cashGiven } = this.state;
        return parseInt(billAmount, 10) <= 0 || parseInt(cashGiven, 10) <= 0;
    };

    isCashGivenGreaterThanBillAmount = () => {
        const { billAmount, cashGiven } = this.state;
        return parseInt(cashGiven, 10) >= parseInt(billAmount, 10);
    };

    renderAlertComponent = () => {
        const { billAmount, cashGiven } = this.state;
        if (this.isNegativeInputs()) {
            return (
                <div className="alert-wrapper">
                    <p>
                        "Sorry, Bill Amount or Given Amount cannot be zero or
                        negative!"
                    </p>
                </div>
            );
        } else if (billAmount !== "" && cashGiven !== "" && !this.isCashGivenGreaterThanBillAmount()) {
            return (
                <div className="alert-wrapper">
                    <p>Uhmm! The kitchen's that side????</p>
                </div>
            );
        } else if (billAmount < cashGiven) {
            return null;
        }
    };

    render() {
        const { countOfNotes } = this.state;
        return (
            <div className="main-content-wrapper">
                <div className="main-input-wrapper">
                    <InputComponent
                        inputTitle="Bill Amount"
                        callbackHandler={this.billAmountHandler}
                    />
                    <InputComponent
                        inputTitle="Cash Given"
                        alert={alert}
                        callbackHandler={this.cashAmountHandler}
                    />
                </div>
                <div className="main-btn-wrapper">
                    <button
                        className={`main-btn ${
                            (!this.validateInput() ||
                                !this.isCashGivenGreaterThanBillAmount()) ?
                            "disabled" : "success"
                        }`}
                        onClick={this.onClickHandler}
                        disabled={!this.validateInput()}
                    >
                        <p>Check</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>
                </div>
                <div className="alert-container">
                    {this.renderAlertComponent()}
                </div>
                <NotesTable notes={countOfNotes} />
            </div>
        );
    }
}

export default Main;
