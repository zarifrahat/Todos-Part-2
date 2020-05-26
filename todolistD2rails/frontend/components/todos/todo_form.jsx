import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        // debugger
        super(props);
        this.state = {
            title: "",
            body: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        this.props.receiveTodo(this.state.title, this.state.body, undefined)

    }

    handleTitle(e){
        // debugger
        this.setState({
            title: e.currentTarget.value
        })
    }

    handleDescription(e){
        // debugger
        this.setState({
        body: e.currentTarget.value
                })
    }

    render(){
        return (
           <> 
        <form action="" onSubmit={this.handleSubmit}>

            <label htmlFor="todo-title">Title:</label>
            <br/>
            <input onChange={this.handleTitle} name="title" id="todo-title" type="text" value={this.state.title}/>
            <br />

            <label  htmlFor="todo-description">Description:</label>
            <br/>   
                    <textarea onChange={this.handleDescription} name="description" id="todo-description" cols="30" rows="10" value={this.state.description}/> 
            <br />
            {/* <label htmlFor="todo-tags">Tags:</label> */}
            {/* <br /> */}
            {/* <input name="todo[tags]" id="todo-tags" type="text"/> */}
            <br />
            <br />
            <input type="submit" value="Create Todo!"/>
        </form>
        </>  
        )
      
    }
}

export default TodoForm;