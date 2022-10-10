# Notes Scribbled for React Native

## Core Components

NOTE: Remember to import all things that needed before using <br>
REFER HERE: [Documentations](https://reactnative.dev/docs/components-and-apis)

1. `<Text>` and `</Text>`
    - Text must be surrounded between them

2. `<View>` and `</View>`
    - container component
    - meant to hold and lay out other components
    - can have many child components in between
    - can have nested `<view>`

3. `<Button>`
    - we don't use it like above by adding caption between opening and closing tags
    - its a self-closing element
    - does not support `style`
    - add title
    ```js
    <Button title='Tap me!'/>
    ```

4. `<TextInput>`
    ```js
    <TextInput placeholder='Your Course Goal!' onChangeText={function}/>
    ```
    - don't add () after the function, because in this case it will run immediately when the APP renders
    - only execute whenever the text changes in this input


## Styling

1. `style =`
    - not all supported, only `<View>`, `<Text>` etc.
    - format: `<Text style={{object: properties},{...}}>`
    ```js
    <Text style={{margin: 16, borderWidth: 1, borderColor: 'red', padding: 16}}>
    ```
    - however, not a good idea to lump all tgt, best to seperate the JSX code and styling code
    - create objects inside `const styles = StyleSheet.create({})`
    - ex.
    ```js
    const styles = StyleSheet.create({
        dummy: {margin: 16, 
                borderWidth: 1, 
                borderColor: 'red', 
                padding: 16,}
    })
    ```
    - how ro access?
    ```js
    <Text style={styles.dummy}>
    ```

## Flexbox
```js
 dummy = {flex: 1,      // this means the proportion this container it will takes
                        // the idea is like a fraction
          flexDirection: 'row',     // default -- 'coloumn'
          justifyContent: 'flex-start',
          alignItems: 'flex-start',}
```

## UseState
- updating a state variable always **replaces** it instead of merging it.

What does calling `useState` do?
- It declares a “state variable”.
- **“preserve”** some values between the function calls
- `useState` is a new way to use the exact same capabilities that `this.state` provides in a class.

What do we pass to `useState` as an argument?
- only argument to the useState() Hook is the **initial state**.
- ex. want number -- argument: pass _0_ as initial state
- if want to store two different values in state, call `useState()` twice.

What does `useState` return?
- returns a pair of values: the current state and a function that updates it




