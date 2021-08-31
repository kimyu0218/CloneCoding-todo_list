import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  margin: 0px;
  font-size: 19px;
  cursor: pointer;
  /* 휴지통에 마우스 올리면 빨간색으로 변화 */
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  /* 항목에 마우스 올리면 휴지통 아이콘 보이기 */
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 16px;
  border: 1px solid #faad14;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  /* 체크박스 표시 */
  ${props =>
    props.done &&
    css`
      border: 1px solid #faad14;
      color: #faad14;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 18px;
  color: #495057;
  /* 체크박스 표시된 경우 글자색 변경 */
  ${props =>
    props.done &&
    css`
      color: #d9d9d9;
    `}
`;

// 각 항목 ( CheckCircle: 체크 박스, Remove: 삭제 버튼 )
function TodoItem({ id, done, text }) {

  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
          {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);