// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import TagsInput from "react-tagsinput";
//
// class InputTags extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: this.props.name,
//       data: {},
//       value: []
//     };
//   }
//
//   handleOfferTagChange = tags => {
//     this.setState({ value: tags });
//     const { data } = this.state;
//     data.values = { name: this.state.name, val: event.target.value };
//     this.props.onChange(data);
//   };
//
//
//   // };
//
//   render() {
//     const {
//       value
//     } = this.props;
//     // const { value } = this.state;
//     return (
//       //eslint-disable-next-line jsx-a11y/no-onchange
//       <TagsInput
//         onChange={this.handleOfferTagChange}
//         value={value}
//       />
//     );
//   }
// }
//
// Text.propTypes = {
//   autoComplete: PropTypes.string,
//   type: PropTypes.string,
//   name: PropTypes.string,
//   onChange: PropTypes.func,
//   className: PropTypes.string,
//   id: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string
// };
//
// export default Text;
