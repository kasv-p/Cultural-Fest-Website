// import React, { Component } from 'react';
// import '../../styles/scrollToTop.css';

// class scrollToTopBtn extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             showScroll: false,
//         };
//     }

//     componentDidMount(){
//         window.addEventListener('scroll', this.checkScrollTop);
//     }

//     componentWillUnmount(){
//         window.removeEventListener('scroll', this.checkScrollTop);
//     }

//     checkScrollTop = () => {
//         if(!this.state.showScroll && window.pageYOffset >400){
//             this.setState({showScroll: true});
//         } else if(this.state.showScroll && window.pageYOffset <= 400){
//             this.setState({showScroll: false});
//         }
//     };

//     scrollToTop = () => {
//         window.scrollTo({top: 0, behavior: 'smooth'});
//     };

//     render(){
//         return (
//             <button 
//                 className='scroll-to-top'
//                 onClick={this.scrollToTop}
//                 style={{display: this.state.showScroll? 'block': 'none'}}
//             >
//                 &#8679;
//             </button>
//         );
//     }
// }

// export default scrollToTopBtn;