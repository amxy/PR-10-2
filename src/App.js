// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

// Heading Component (h1 - h6)
const Heading = styled.div`
  font-size: ${(props) => {
    switch (props.as) {
      case 'h1': return '36px';
      case 'h2': return '32px';
      case 'h3': return '28px';
      case 'h4': return '24px';
      case 'h5': return '20px';
      case 'h6': return '16px';
      default: return '24px';
    }
  }};
  color: ${(props) => props.color || 'palevioletred'};
  text-align: ${(props) => props.align || 'center'};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.hoverColor || 'tomato'};
  }
`;

function App() {
  return (
    <div className="container"> 
      <Heading as="h1" color="purple" hoverColor="orange">Styled H1</Heading>
      <Heading as="h2" color="blue" hoverColor="red">Styled H2</Heading>
      <Heading as="h3" color="green" hoverColor="yellow">Styled H3</Heading>
      <Heading as="h4" color="black" hoverColor="gray">Styled H4</Heading>
      <Heading as="h5" color="brown" hoverColor="pink">Styled H5</Heading>
      <Heading as="h6" color="teal" hoverColor="lime">Styled H6</Heading>
      <div className="button-group">
        <button className="primary-button">Primary Button</button>
        <button className="secondary-button">Secondary Button</button>
      </div>
    </div>
  );
}



export default App;
