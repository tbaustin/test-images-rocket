import React from 'react'

export default class extends React.Component{
	constructor(props){
		super(props)
		this.state = { error: false }
		this.handleBlur = this.handleBlur.bind(this)
	}
	handleBlur(e){
		if(!this.props.required) return
		if(!e.target.value){
			this.setState({
				error: 'This field is required.'
			})
		}
		else{
			this.setState({ error: false })
		}
		if(this.props.handleBlur){
			this.props.handleBlur(e)
		}
	}
	render(){
		return (
			<label className={ this.state.error ? 'error' : '' } style={ this.props.labelStyle }>
				{ this.props.label }
				<input
					type='number'
					defaultValue={ this.props.defaultValue || '1' }
					onBlur={ this.handleBlur }
					onChange={ this.props.handleChange }
					required={ this.props.required ? 'required' : '' }
					name={ this.props.name }
					placeholder={ this.props.placeholder }
					ref={ this.props.inputRef }
					style={ this.props.style }
					min={ this.props.min }
					max={ this.props.max }
					step={ this.props.step }
					/>
				<div className="msg">{this.state.error}</div>
				<style jsx>{`
					label{
						cursor: pointer;
						margin-bottom: 20px;
						display: block;
					}
					input{
						display: block;
						outline: 0;
						border: 1px solid #ccc;
						background-color: rgba(255, 255, 255, .6);
						padding: 5px 10px;
						width: 100%;
						font-size: 1em;
						height: 40px;
						margin-top: 7px;
						&:active, &:focus{
							border: 1px solid #000;
						}
					}
					.msg{
						margin-top: 5px;
						display: none;
						font-size: .8em;
					}
					.error{
						color: #f00;
						& input{
							border: 1px solid red;
							background-color: rgba(255, 0, 0, .1);
						}
						& .msg{
							display: block;
						}
					}
				`}</style>
			</label>
		)
	}
}
