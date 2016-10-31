import emmiter from '../seconds/emmiter';

const AddNews = React.createClass({
	outputValue: function ( event )
	{
		event.preventDefault();
		
		const form = ReactDOM.findDOMNode( this.refs.form );
		const author =  ReactDOM.findDOMNode( this.refs.author );
		const message =  ReactDOM.findDOMNode( this.refs.message );
		const messageMore =  ReactDOM.findDOMNode( this.refs.messageMore );
		const agreement =  ReactDOM.findDOMNode( this.refs.checkbox );

		if ( author.value 
			&& message.value 
			&& messageMore.value 
			&& agreement.checked )
		{	
			const item = {
					author: `${author.value}`,
					text: `${message.value}`,
					moreText: `${messageMore.value}`
				}

			emmiter.emit( 'add', item );
			form.reset();
		}
		else
		{
			alert( 'Заполните все обязательные поля' );
		}
	},
	render: function()
	{
		return (
			<form ref='form'>
				<h2>Добавьте новость</h2>
				<input
					className='author'
					defaultValue=''
					placeholder='Автор новости *'
					ref='author'
				/>
				<textarea 
					className="text-news"
					defaultValue=''
					placeholder="Текст новости *"
					ref="message"
				>
				</textarea>
				<textarea 
					className="more-text-news"
					defaultValue=''
					placeholder="Основной текст новости *"
					ref="messageMore"
				>
				</textarea>
				<input 
					type="checkbox"
					name="agreement"
					id="agreement"
					defaultChecked={false}
					ref="checkbox"
				/>
				<label htmlFor="agreement">Согласие *</label>
				<button type="submit" onClick={ this.outputValue } ref='alert_button'>Вывести значение поля</button>
			</form>
		);
	}
});

export {
	AddNews as default,
}
