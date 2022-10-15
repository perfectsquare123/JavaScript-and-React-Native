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

```js
// outputting a list of data
{courseGoals.map((goal) => <Text>{goal}</Text>)}
// every item in the list should receive a key prop -- uniquely identifies the individual list item
{courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
// every key shud be unique, although might have repetitive input, but for now is fine

```

## Platform-specific styling
ex. when applying the style directly onto the <text>, the round corner doesn't show in IOS. <br>
=> the text component is translated by React Native to a fitting native widget a native UI element <br>
i) Android: corners can be rounded <br>
ii) IOS: does not support rounded corner => border radius no effect <br>
(how to solve? round text in a `<View>`, put style and and key in it => underlying element => translate into element that support corner for both platform => `<Text>` now is nested element => styling is now applied to more versatile `<View>` element) <br>

=> but now the text is black colour <br>
**LESSON:** style don't cascade => does not inherit style from acenstor

## Scrolling
1. `<Scrollview>`
    > Add `<Scrollview>` to make the section can be scroll
    - default `<View>` is not scrollable, oppose to web
    - but it applies on the section of that container which will change the spacing/ flex => add `<View>` outside encapsulate the `<Scrollview>` to fix the set height

2. `<Scrollview>` vs `<FlatList>`
(a) `<Scrollview>`
- renders all child items (regarding the size => performance issues for long list ex. 1000000 items)
- good for limited amount of content, fix end point
```js
    ...currentCourseGoals, enteredGoalText
```
```js
    </View> 
    <View style={styles.goalsContainer}>
    <ScrollView>
        {courseGoals.map((goal) => (
        <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
        </View>
        ))}
    </ScrollView>
    </View>
```

(b) `<FlatList>`
- good for dynamic list
- internally only renders the items that is presentable on screen, remaining items will only be rendered lazily as they are needed as the user is scrolling
- has **threshold**, only render will close to it
- (remove）so no more need _mapping_
- （add 2 prop) 1. data prop ex. data={coourseGoal}

**Two main ways of adding keys to these list items**
1. turn data values from *primitive values* like strings into *objects*
```js
    ...currentCourseGoals, 
    {text: enteredGoalText, key: Math.random().toString()}
    // to generate unique key
    // now every item in CourseGoal is an object with text and key property
```
 - flat list will automatically look for such key, to be use as key for item to be rendered
```js
    <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
        }} 
        alwaysBounceVertical={false}
        />
    </View>

    // {itemData.item.text} -- add a .text to dive into the text property, since now item is an object dy with text and key as property
```
- **NOTE** if we dont have property name key, cuz we getting data from an API, can't influence its shape, and don't want to trasnform it because flat list need key property
    - we can change the `key` to some other parameter, which we know is unique, such as `id`
    ```js
    ...currentCourseGoals, 
    {text: enteredGoalText, id: Math.random().toString()}
    ```
    - then in the flat list, we add `keyExtractor` where the function takes in 2 parameters -- item & index
    ```js
    keyExtractor={(item, index) => {
        return item.id;
    }}
    ```








