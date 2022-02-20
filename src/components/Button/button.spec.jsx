import {fireEvent, render,screen} from '@testing-library/react'
import {Button} from './index'

//grupo de testes
describe('<Button />',()=>{
  //teste para ver se tem o nome no botão com Load more
  it('should render the button with the text "Load more"',()=>{
    render(<Button text="Load more"/>);
    const button = screen.getByRole('button',{name: /load more/i})
    expect(button).toBeInTheDocument();
  });
  // teste para chamar uma função depois de clicar no botão
  it('should call function on button click', () =>{
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn}/>);
    const button = screen.getByRole('button',{name: /load more/i});
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
  // teste para quando o botão estiver desativado
  it('should be disabled when disabled is true', () =>{
    render(<Button text="Load more" disabled={true}/>);
    const button = screen.getByRole('button',{name: /load more/i});
    expect(button).toBeDisabled();
  });
  it('should match snapshot', () =>{
    const {container} = render(<Button text="Load more" disabled={true}/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});