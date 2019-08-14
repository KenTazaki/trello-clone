import React, {Component} from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import {DragDropContext} from 'react-beautiful-dnd';

class App extends Component {
  onDragEnd = () => {
    // TODO: reordering logic
  };
  render () {
    const {lists} = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>はろー</h2>
          <div style={styles.listsContainer}>
            {lists.map (list => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
});

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export default connect (mapStateToProps) (App);
