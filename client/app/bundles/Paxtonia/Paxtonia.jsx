import React from 'react'
import ReactOnRails from 'react-on-rails'
import NPC from './npc'
import Input from './input'

export default class Paxtonia extends React.Component { 
  constructor(props) {
  super(props)
  this.state = {
      currentOutput: "NPC stuff goes here!",
      gameState: "",
      conversationHistory: {npcSaid: [], userSaid: []}
    }
  }
  render(){
    return (
    <div>
      <NPC stats={this.props} output={this.state.currentOutput} />
      <Input />
    </div>
  )
  }
}

ReactOnRails.register({ Paxtonia })

