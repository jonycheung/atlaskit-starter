import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const cupcakes = [
  'Apple pie chocolate jelly beans macaroon soufflé lollipop sugar plum tiramisu gingerbread. Tiramisu jelly beans tart. Cake ice cream lollipop pudding dragée jujubes. Sweet liquorice brownie icing gummi bears soufflé cotton candy danish. Carrot cake marshmallow toffee tart. Oat cake topping gummies dragée sugar plum candy canes marshmallow jelly beans. Cotton candy apple pie cupcake cookie gummies wafer chocolate cookie sugar plum. Dragée fruitcake sweet sesame snaps jelly. Candy sweet muffin biscuit chupa chups. Oat cake ice cream chocolate bear claw marzipan chocolate bar soufflé gummies. Pastry biscuit icing. Pastry croissant apple pie jelly beans sesame snaps cotton candy donut pie. Dragée sweet roll chupa chups jelly-o.', // eslint-disable-line
  'Macaroon fruitcake cake. Macaroon lollipop lollipop. Jelly cupcake croissant carrot cake biscuit cotton candy carrot cake. Muffin cookie candy canes. Jelly-o candy brownie pastry cupcake cheesecake gummies cake apple pie. Pudding topping caramels jujubes icing soufflé macaroon dragée liquorice. Powder liquorice donut ice cream. Gummi bears sweet roll wafer. Topping jelly tootsie roll ice cream jelly-o sweet roll bonbon jelly carrot cake. Danish toffee croissant fruitcake topping. Tart caramels cake icing lollipop jelly beans chocolate bar croissant. Sweet gummi bears macaroon ice cream sweet roll cotton candy fruitcake toffee bear claw. Jelly beans bear claw jujubes ice cream macaroon apple pie. Donut chupa chups candy fruitcake chocolate croissant gummies.', // eslint-disable-line
  'Pudding gummies pie cake pie candy sesame snaps. Fruitcake wafer gummies. Powder topping wafer brownie. Oat cake jelly-o cheesecake brownie. Candy canes marzipan sweet roll carrot cake gummi bears apple pie. Halvah dessert tiramisu apple pie liquorice cotton candy chocolate bar brownie. Danish cake powder pie bear claw fruitcake donut chocolate cake marzipan. Tiramisu gingerbread ice cream liquorice topping candy canes. Marzipan tiramisu candy cake cupcake dessert soufflé carrot cake. Chupa chups marshmallow toffee bonbon brownie tiramisu. Cupcake icing cheesecake chocolate cake pie candy canes jelly beans donut. Bear claw tart jelly beans chupa chups. Marzipan powder cookie.', // eslint-disable-line
  'Gummi bears cupcake jelly-o. Fruitcake cupcake cake icing carrot cake powder jelly-o pastry brownie. Wafer chupa chups tootsie roll cake cheesecake liquorice. Marshmallow bear claw wafer candy chupa chups cotton candy donut chupa chups. Marshmallow danish sweet topping chocolate cake biscuit topping. Apple pie soufflé lemon drops oat cake caramels. Tiramisu jelly beans gingerbread ice cream pie dessert danish. Sweet roll jelly beans pudding. Candy canes chocolate lollipop. Gummi bears sesame snaps carrot cake dessert liquorice. Lollipop pudding chocolate bar. Chocolate cake bonbon cookie soufflé jelly beans pastry chocolate bar gummies marzipan.', // eslint-disable-line
  'Cotton candy gummi bears chocolate cake tart chupa chups cotton candy toffee fruitcake sesame snaps. Danish tootsie roll jelly-o bear claw. Sugar plum candy icing sweet candy canes lemon drops. Macaroon cookie gingerbread cheesecake dragée. Lemon drops chocolate bar donut jelly beans pudding gummies tootsie roll chocolate bar. Cookie brownie jujubes wafer chupa chups halvah jelly apple pie sesame snaps. Cake candy pie lemon drops sugar plum liquorice chupa chups carrot cake. Tiramisu chocolate sweet topping. Liquorice candy canes gummies tootsie roll jujubes cake. Tiramisu macaroon danish fruitcake oat cake toffee cupcake. Jelly sugar plum macaroon candy dessert jelly beans bear claw wafer. Macaroon ice cream croissant jujubes sweet roll.', // eslint-disable-line
];

export default class CupcakeIpsum extends PureComponent {
  static propTypes = {
    paragraphs: PropTypes.number,
  };

  static defaultProps = {
    paragraphs: 1,
  };

  randomParagraph = () => cupcakes[Math.floor(Math.random() * cupcakes.length)];

  render() {
    return (
      <section>
        {[...Array(this.props.paragraphs)].map((x, i) =>
          <p key={i + 1}>
            {this.randomParagraph()}
          </p>
        )}
      </section>
    );
  }
}
