import React, {Component} from "react";

// Import components
import Home from '../components/Home.jsx';

// CSS framework
import 'fomantic-ui-css/semantic.min.css';
import Menu from "../components/Menu";

const NotFoundPage = () => {
  return (
    <NotFoundComponent></NotFoundComponent>
  )
}

class NotFoundComponent extends Component {
  render() {
    return (
      <main ref="background">
        <Menu/>
        <div className="ui main container" >
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="notFound"></p>
              <p className="ui center aligned large header">Not found</p>
              <p className="ui">
                The page you were looking for could not be found
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default NotFoundPage
