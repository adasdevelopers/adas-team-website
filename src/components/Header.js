import icon from "../assets/img/eicon_head_1.png";
import Nav from './Navigation'
import Typist from 'react-typist';
// TODO: make props
function Header({title, subtitle, additional, homepage}) {
    return (
      <header>
          <h1 className={homepage?"font-title text-7xl md:text-blue animate-fade-in-down": "text-left lg:mx-48 mx-8"}>{title}</h1>
          <p
              className="font-body italic text-lg lg:mx-48 mx-8">
              <Typist>
              <Typist.Delay ms={1800}/>
              {subtitle}
              </Typist>
              <b>{additional || ""}</b>
          </p>
      </header>
    );
}

export default Header;
