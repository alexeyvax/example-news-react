import Article from './Article';

const News = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	render: function ()
	{
		const data = this.props.data;
		let newsTemplate;
		let countNews;
		
		if ( data.length )
		{
			newsTemplate = data.map(
				( item, index ) =>
				{
					return (
						<li className="article" key={index}>
							<Article data={item} />
						</li>
					)
				}
			);
			
			countNews = <strong>
							Всего новостей: {data.length}
						</strong>;
		}
		else
		{
			newsTemplate = <p>Новостей нет.</p>;
			countNews = null;
		}

		return (
			<ul className="news">
				{newsTemplate}
				{countNews}
			</ul>
		);
	}
});

export {
	News as default,
}
