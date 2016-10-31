import emmiter from '../seconds/emmiter';
import listNews from '../seconds/listNews';
import News from './News';
import AddNews from './AddNews';

const App = React.createClass({
	componentDidMount: function()
	{
		emmiter.addListener( 'add', (item) =>
		{
			const newNews = listNews.push( item );
			this.setState( {listNews: newNews} );
		});
	},
	componentWillUnmount: function()
	{
		emmiter.removeListener( 'add' );
	},
	render: function()
	{
		return (
			<section className="app">
				<h1>Новости</h1>
				<News data={listNews} />
				<AddNews/>
			</section>
		);
	}
});

export {
    App as default,
}
