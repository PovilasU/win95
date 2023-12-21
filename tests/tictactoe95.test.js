import { Set, Get, Sum, MyMove, createImgTag, DrawTable } from './tictactoe95.js';

describe('TicTacToe95', () => {
  it('should set the value at the specified offset in the string', () => {
    const str = '123456789';
    const offset = 3;
    const value = 'X';
    const result = Set(str, offset, value);
    expect(result).toEqual('123X56789');
  });

  it('should get the value at the specified offset in the string', () => {
    const str = '123456789';
    const offset = 5;
    const result = Get(str, offset);
    expect(result).toEqual(6);
  });

  it('should sum the values at the specified offsets in the string', () => {
    const str = '123456789';
    const offset1 = 1;
    const offset2 = 4;
    const offset3 = 7;
    const result = Sum(str, offset1, offset2, offset3);
    expect(result).toEqual(15);
  });

  it('should make a move based on the given data', () => {
    const data = '123456789';
    const result = MyMove(data);
    expect(result).toEqual('123456789');
  });

  it('should create an image tag with the given source', () => {
    const src = 'images/gameb.gif';
    const result = createImgTag(src);
    expect(result).toEqual('<IMG ALIGN=bottom SRC="images/gameb.gif">');
  });

  it('should draw the Tic-Tac-Toe table based on the given data', () => {
    const data = '123456789';
    DrawTable(data);
    // TODO: Add assertions to check the generated HTML output
  });
});