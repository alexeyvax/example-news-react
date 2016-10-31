(function () {
	'use strict';

	var emmiter = new EventEmitter();

	var listNews = [{
		author: 'Алексей',
		text: 'Давно выяснено, что при оценке дизайна и композиции',
		moreText: '\u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \n\t\t\t\t\t\u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438 \n\t\t\t\t\t\u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432 \u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 "\u0417\u0434\u0435\u0441\u044C \u0432\u0430\u0448 \u0442\u0435\u043A\u0441\u0442.. \n\t\t\t\t\t\u0417\u0434\u0435\u0441\u044C \u0432\u0430\u0448 \u0442\u0435\u043A\u0441\u0442.'
	}, {
		author: 'Андрей',
		text: 'Здесь ваш текст.." Многие программы электронной вёрстки',
		moreText: '\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u044B HTML \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 Lorem Ipsum \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0442\u0430\u043A \u0447\u0442\u043E \u043F\u043E\u0438\u0441\u043A \u043F\u043E \n\t\t\t\t\t\u043A\u043B\u044E\u0447\u0435\u0432\u044B\u043C \u0441\u043B\u043E\u0432\u0430\u043C "lorem ipsum" \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043A\u0430\u043A \u043C\u043D\u043E\u0433\u043E \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0432\u0441\u0451 \u0435\u0449\u0451 \u0434\u043E\u0436\u0438\u0434\u0430\u044E\u0442\u0441\u044F \n\t\t\t\t\t\u0441\u0432\u043E\u0435\u0433\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F.'
	}, {
		author: 'Эдгельгард',
		text: 'За прошедшие годы',
		moreText: '\u0442\u0435\u043A\u0441\u0442 Lorem Ipsum \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u043C\u043D\u043E\u0433\u043E \u0432\u0435\u0440\u0441\u0438\u0439. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u043F\u043E \u043E\u0448\u0438\u0431\u043A\u0435, \n\t\t\t\t\t\u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 - \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u043D\u043E.'
	}];

	var Article = React.createClass({
		displayName: 'Article',

		propTypes: {
			data: React.PropTypes.shape({
				author: React.PropTypes.string.isRequired,
				text: React.PropTypes.string.isRequired,
				moreText: React.PropTypes.string.isRequired
			})
		},
		getInitialState: function getInitialState() {
			return {
				visible: false,
				text: 'Читать далее'
			};
		},
		render: function render() {
			var _this = this;

			var readMoreOpen = 'Читать далее';
			var readMoreClose = 'Свернуть';

			var changeState = function changeState(event, state) {
				event.preventDefault();

				if (state) {
					_this.setState({
						visible: false,
						text: readMoreOpen
					});
				} else {
					_this.setState({
						visible: true,
						text: readMoreClose
					});
				}
			};

			var props = this.props.data;
			var author = props.author;
			var text = props.text;
			var moreText = props.moreText;
			var visibility = this.state.visible;
			var buttonContent = this.state.text;

			var outputLink = React.createElement(
				'button',
				{ type: 'button', onClick: function onClick(event) {
						return changeState(event, visibility);
					},
					className: 'read-more' },
				buttonContent
			);
			var outputText = visibility ? React.createElement(
				'p',
				{ className: 'news-moreText' },
				moreText
			) : null;

			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'p',
					{ className: 'news-author' },
					author,
					':'
				),
				React.createElement(
					'p',
					{ className: 'news-text' },
					text
				),
				outputText,
				outputLink
			);
		}
	});

	var News = React.createClass({
		displayName: "News",

		propTypes: {
			data: React.PropTypes.array.isRequired
		},
		render: function render() {
			var data = this.props.data;
			var newsTemplate = void 0;
			var countNews = void 0;

			if (data.length) {
				newsTemplate = data.map(function (item, index) {
					return React.createElement(
						"li",
						{ className: "article", key: index },
						React.createElement(Article, { data: item })
					);
				});

				countNews = React.createElement(
					"strong",
					null,
					"\u0412\u0441\u0435\u0433\u043E \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439: ",
					data.length
				);
			} else {
				newsTemplate = React.createElement(
					"p",
					null,
					"\u041D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u0442."
				);
				countNews = null;
			}

			return React.createElement(
				"ul",
				{ className: "news" },
				newsTemplate,
				countNews
			);
		}
	});

	var AddNews = React.createClass({
		displayName: 'AddNews',

		outputValue: function outputValue(event) {
			event.preventDefault();

			var form = ReactDOM.findDOMNode(this.refs.form);
			var author = ReactDOM.findDOMNode(this.refs.author);
			var message = ReactDOM.findDOMNode(this.refs.message);
			var messageMore = ReactDOM.findDOMNode(this.refs.messageMore);
			var agreement = ReactDOM.findDOMNode(this.refs.checkbox);

			if (author.value && message.value && messageMore.value && agreement.checked) {
				var item = {
					author: '' + author.value,
					text: '' + message.value,
					moreText: '' + messageMore.value
				};

				emmiter.emit('add', item);
				form.reset();
			} else {
				alert('Заполните все обязательные поля');
			}
		},
		render: function render() {
			return React.createElement(
				'form',
				{ ref: 'form' },
				React.createElement(
					'h2',
					null,
					'\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u044C'
				),
				React.createElement('input', {
					className: 'author',
					defaultValue: '',
					placeholder: '\u0410\u0432\u0442\u043E\u0440 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 *',
					ref: 'author'
				}),
				React.createElement('textarea', {
					className: 'text-news',
					defaultValue: '',
					placeholder: '\u0422\u0435\u043A\u0441\u0442 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 *',
					ref: 'message'
				}),
				React.createElement('textarea', {
					className: 'more-text-news',
					defaultValue: '',
					placeholder: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 *',
					ref: 'messageMore'
				}),
				React.createElement('input', {
					type: 'checkbox',
					name: 'agreement',
					id: 'agreement',
					defaultChecked: false,
					ref: 'checkbox'
				}),
				React.createElement(
					'label',
					{ htmlFor: 'agreement' },
					'\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 *'
				),
				React.createElement(
					'button',
					{ type: 'submit', onClick: this.outputValue, ref: 'alert_button' },
					'\u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F'
				)
			);
		}
	});

	// создание компонента
	var App = React.createClass({
		displayName: 'App',

		componentDidMount: function componentDidMount() {
			var _this = this;

			emmiter.addListener('add', function (item) {
				var newNews = listNews.push(item);
				_this.setState({ listNews: newNews });
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			emmiter.removeListener('add');
		},
		render: function render() {
			return React.createElement(
				'section',
				{ className: 'app' },
				React.createElement(
					'h1',
					null,
					'\u041D\u043E\u0432\u043E\u0441\u0442\u0438'
				),
				React.createElement(News, { data: listNews }),
				React.createElement(AddNews, null)
			);
		}
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById('news'));

}());
//# sourceMappingURL=index.js.map
