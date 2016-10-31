const Article = React.createClass({
	propTypes: {
		data: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			moreText: React.PropTypes.string.isRequired
		})
	},
	getInitialState: function()
	{
		return {
			visible: false,
			text: 'Читать далее'
		};
	},
	render: function()
	{
		const readMoreOpen = 'Читать далее';
		const readMoreClose = 'Свернуть';

		const changeState = ( event, state ) =>
		{
			event.preventDefault();
			
			if ( state )
			{
				this.setState( {
					 visible: false,
					 text: readMoreOpen
					} );
			}
			else
			{
				this.setState( {
					 visible: true,
					 text: readMoreClose
					} );
			}
		};
		
		const props = this.props.data;
		const author = props.author;
		const text = props.text;
		const moreText = props.moreText;
		const visibility = this.state.visible;
		const buttonContent = this.state.text;
		
		const outputLink = <button type="button" onClick={ ( event ) => changeState( event, visibility ) } 
							className="read-more">{ buttonContent }</button>;
		const outputText = visibility ? <p className="news-moreText">{ moreText }</p> : null;
		
		return (
			<div className="container">
				<p className="news-author">{author}:</p>
				<p className="news-text">{text}</p>
				{ outputText }
				{ outputLink }
			</div>
		)
	}
});

export {
	Article as default,
}