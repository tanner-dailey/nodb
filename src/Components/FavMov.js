import React, {Component} from 'react';

class FavMov extends Component {
    constructor(){
        super();
        this.state = {
            isEditing: false,
            newRating: 0
        }
    }

    handleRating = (val) => {
        this.setState({newRating: val})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleEdit = (id) => {
        this.props.rateFn(id, this.state.newRating);
        this.handleToggle();
    }

    render(){
        return (
            <div className='ind-fav'>
                <h2>{this.props.movie.title}</h2>
                <br />
                <div className='mov-info'>
                {this.state.isEditing
                ? (
                    <div>
                        <select onChange={e => this.handleRating(e.target.value)}>
                            <option value="" disabled selected>Select Rating</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <button onClick={() => this.handleEdit(this.props.movie.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <h3>{this.props.movie.rating}/10</h3>
                        <button onClick={this.handleToggle}>Change Rating</button>
                    </div>
                )}
                <button onClick={() => this.props.removeFn(this.props.movie.id)}>Remove</button>
                </div>
            </div>
        )
    }
}

export default FavMov;