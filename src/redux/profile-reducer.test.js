import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 2},
        {id: 4, message: 'Dada', likesCount: 0}
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("it-kamasutra");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("it-kamasutra");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test('after deleting length should not be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});
