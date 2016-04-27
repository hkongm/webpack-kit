/*
 * action 类型
 */

export const PLUS_ONE = 'PLUS_ONE';
export const SUBTRACT_ONE = 'SUBTRACT_ONE';

/*
 * action 创建函数
 */

export function plusOne() {
  return { type: PLUS_ONE }
}

export function subtractOne() {
  return { type: SUBTRACT_ONE }
}
//
// export function plusOne(text) {
//   return { type: ADD_TODO, text }
// }
//
// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index }
// }
