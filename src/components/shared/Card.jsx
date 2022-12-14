import PropTypes from 'prop-types';
const Card =   ({children,reverse}) =>(<div className={`card ${reverse&& 'reverse'}`}>{children}</div>)


Card.propTypes = {
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}

Card.defaultProps = {
    reverse:false,
}


export default Card;

    