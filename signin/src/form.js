class App extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       class: '',
       modal: false
     };
   }


   switch = () => {
     var mode = localStorage.getItem("mode");
     if (mode === "lightMode") {
       localStorage.setItem("mode", "nightMode");
       this.setState({ class: 'nightMode' });
     } else {
       localStorage.setItem("mode", "lightMode");
       this.setState({ class: 'lightMode' });
     }
   };

   componentDidMount = () => {
     var mode = localStorage.getItem("mode");
         if (mode) {
           this.setState({ class: mode });
     } else {
       this.setState({ class: 'default' });
     }
   };

     render() {
         return ( <div className={this.state.class}>
             STATE = {this.state.class}
               <Reactstrap.Button
               className="mt-5 mb-5 pl-5 pr-5 btn-lg"
               onClick={this.switch}
               color="success"
               active
             >
               Switch
             </Reactstrap.Button>
       </div>);
     }
 }


 ReactDOM.render(
     <App />,
     document.getElementById('root')
 );