import AuthenticationReducer from "./reducer/AuthenticationReducer";
//import { createStore } from "redux";

function Home (props) {

    //const store = createStore(AuthenticationReducer);
    if(props.store.getState().AuthenticationReducer[0] === null) {
        props.store.dispatch({type:'login', data:{un:props.un, role:props.role}})
    }

    return(
        <div>
            This is a Home Page {props.un}
            <br/>
            This is the state user name value {props.store.getState().AuthenticationReducer[0]}
            <br/>
            This is the state role value {props.store.getState().AuthenticationReducer[1]}
        </div>
    );
}

export default Home