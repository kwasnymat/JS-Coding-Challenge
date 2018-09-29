import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return (
            <Button />
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            count: 0
        };
    }

    addInput = () => {
        this.setState({
            count: this.state.count+1
        })
    };

    removeInput = () =>{
        this.setState({
            count: this.state.count - 1
        })
    };

    handleDisplayInputs =() => {
        let inputs = [];
        for(let i = 0; i < this.state.count; i++){
            inputs.push(
                <div key={i}>
                    <Input clickMethod={this.removeInput} className="first" value={this.state.value[i] || ''} />
                </div>
            )
        }
        return inputs || null;
    };


    render() {
        return (
            <div>
                {this.handleDisplayInputs()}
                <input className="add-input" type='button' value='Add input' onClick={this.addInput}/>
            </div>
        );
    }
}



class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            questionType: 'yes',
            value: 0,
            count: 0
        };
    }

    addSubInput = () => {
        this.setState({count: this.state.count+1})
    }

    deleteSubInput = () => {
        this.setState({count: this.state.count-1})
    }

    displaySubInputs = () => {
        let subInputs = [];
        for(let i = 0; i < this.state.count; i++){
            subInputs.push(
                <div key={i}>
                    <SubInput clickMethod={this.addSubInput} value={this.state.value[i] || ''} />
                </div>
            )
        }
        return subInputs || null;
    }

    handleQuestionTypeChange = (event) => {
        this.setState({
            questionType: event.target.value
        });
    };
    handleQuestionChange = (event) => {
        this.setState({
            question: event.target.value
        });
    };
    handleDelete = () => {
        if ( typeof this.props.clickMethod === 'function' ){
            this.props.clickMethod();
        };
    }
    render (){
        return (
            <form className="first">
                <input type="text" value={this.state.question} onChange={this.handleQuestionChange}/>
                <select value={this.state.questionType} onChange={this.handleQuestionTypeChange}>
                    <option value="yes">Yes/No</option>
                    <option value="number">Number</option>
                    <option value="text">Text</option>
                </select>
                <input type='button' value='Add SubInput' onClick={this.addSubInput} />
                <input type='button' value='Delete' onClick={this.handleDelete}/>
                {this.displaySubInputs()}
            </form>
        )
    }
}

//*Dodac usuwanie subinputow poprzez zrobienie komponentu Delete 


class SubInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            condition: 'equals',
            question: '',
            questionType: 'yes',
        };
    }

    handleQuestionTypeChange = (event) => {
        this.setState({
            questionType: event.target.value
        });
    };

    handleEqual = (event) => {
        this.setState({
            condition: event.target.value
        });
    };

    handleQuestionChange = (event) => {
        this.setState({
            question: event.target.value
        });
    };

    handleSubInput = () => {
        if ( typeof this.props.clickMethod === 'function' ){
            this.props.clickMethod();
        }
    };

    handleDeleteSubInput = () => {
        if ( typeof this.props.clickMethod === 'function' ){
            this.props.clickMethod();
        }
    };



    render(){
        return (
            <form className="second">
                <select value={this.state.condition} onChange={this.handleEqual}>
                    <option value="equals">Equals</option>
                    <option value="greather">Greather than</option>
                    <option value="lower">Lower Than</option>
                </select>
                <input type="text" value={this.state.question}/>
                <input type="text" value={this.state.question} onChange={this.handleQuestionChange}/>
                <select value={this.state.questionType} onChange={this.handleQuestionTypeChange}>
                    <option value="yes">Yes/No</option>
                    <option value="number">Number</option>
                    <option value="text">Text</option>
                </select>
                <input type='button' value='Add SubInput' onClick={this.handleSubInput}/>
                <input type='button' value='Delete' onClick={this.handleDeleteSubInput}/>
            </form>
        )
    }

}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});