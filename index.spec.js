import { ChessNode } from "./chess_node"
import {pathFinder, checkIfVisited} from "./index"

describe('function to check node in visit history / set ',()=>{

    it('exists',()=>{
        expect(checkIfVisited).toBeDefined()
    })
})