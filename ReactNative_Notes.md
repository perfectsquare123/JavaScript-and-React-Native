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
    - add title
    <pre>
    <Button title='Tap me!'/>
    </pre>

4. `<TextInput>`
    <pre>
    <TextInput placeholder='Your Course Goal!'/>
    </pre>


## Styling

1. `style =`
    - not all supported, only `<View>`, `<Text>` etc.
    - format: `<Text style={{object: properties},{...}}>`
    <pre>
    <Text style={{margin: 16, borderWidth: 1, borderColor: 'red', padding: 16}}>
    </pre>
    - however, not a good idea to lump all tgt, best to seperate the JSX code and styling code
