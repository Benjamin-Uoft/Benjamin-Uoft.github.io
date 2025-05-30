import styled from 'styled-components';
import { 
  ReactFlow,
  Background,

 } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Tree from 'react-d3-tree';


const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];



function TreeComponent() {
  return (
    <TreeContainer>
      <ReactFlowStyled 
        nodes={initialNodes} 
        edges={initialEdges} 
        fitView >
        <Background/>
      </ReactFlowStyled>
    </TreeContainer>
  );
}

export default TreeComponent

const ReactFlowStyled = styled(ReactFlow)`
  z-index: -1;

`;

const TreeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;