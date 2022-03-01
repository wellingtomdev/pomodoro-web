import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Controls from '../Controls'

it('if typeof is function', async () => {
    expect(typeof Controls).toBe('function')
})

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('exportValues is ok', ()=>{
    let returned = undefined

    function test(values){
        returned = values
    }

    act(() => {
        render(<Controls exportValues={test}/>, container);
    });

    expect(typeof returned).toBe('object')
    expect(typeof returned.showButtons).toBe('function')
    expect(typeof returned.onClick).toBe('function')

})

it('showButtons', ()=>{
    let returned = undefined

    function test(values){
        returned = values
    }

    act(() => {
        render(<Controls exportValues={test}/>, container);
    });

    act(() => {  returned.showButtons('play') })
    expect(container.textContent).toBe('Play')

    act(() => {  returned.showButtons('reset') })
    expect(container.textContent).toBe('Reset')

    act(() => {  returned.showButtons('pause') })
    expect(container.textContent).toBe('Pause')

    act(() => {  returned.showButtons('play', 'reset') })
    expect(container.textContent).toBe('ResetPlay')

    act(() => {  returned.showButtons('reset', 'pause') })
    expect(container.textContent).toBe('ResetPause')

})