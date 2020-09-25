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
                        <input
                            value={this.state.newRating}
                            onChange={e => this.handleRating(e.target.value)} />
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