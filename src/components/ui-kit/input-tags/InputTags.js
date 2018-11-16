// import React, { Component } from "react";
// import propTypes from "prop-types";
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
//   autoComplete: propTypes.string,
//   type: propTypes.string,
//   name: propTypes.string,
//   onChange: propTypes.func,
//   className: propTypes.string,
//   id: propTypes.string,
//   placeholder: propTypes.string,
//   value: propTypes.string
// };
//
// export default Text;
