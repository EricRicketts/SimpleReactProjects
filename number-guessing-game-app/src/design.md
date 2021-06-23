# Design Process
This document details the design process for the simple guessing game.  I am following the outline for design
provided by the React documentation.

### Design Phases
1.  Break The UI Into Component Hierarchy - done
2.  Build A Static Version In React - done
3.  Identify The Minimal But Complete Representation Of UI State
4.  Identify Where Your State Should Live
5.  Add Inverse Data Flow

### Step 3: Identify the Minimal But Complete Representation Of UI State
The first part of this process is to identify the pieces of data in our application:
1.  We keep a count of the number of user guesses
2.  We must keep the user's current guess
3.  For the duration of the game we must have a random number between 1 and 100 inclusive
4.  Provide feedback to the user

The React documentation proposes that a developer ask three questions about each piece of data to determine whether
it is state or not, all these questions determine if the piece of data IS NOT STATE:
1.  Is it passed from a parent via props?
2.  Does it remain unchanged over time?
3.  Can you compute it based on any other state and/or props in the design?

number of guesses count, this gets updated every time the user guesses, so this is state.
the user's current guess, is input by the user, so this is state.
the random number stays constant for the remainder of the game, this is a prop.
feedback to the user if a function of the user's guess and random number value, this is a prop.

So the _Minimal but complete representation of UI state_ are the count and guess variables.

### Step 4: Identify Where Your State Should Live
The nearest common ancestor to both the ```<p>``` and ```<Form>``` elements is ```<App>```.  So _count_ and _guess_
will live in ```<App>```.  _count_ does not need to be pushed down to any child component.  However, _guess_ needs to
be pushed down to ```<Form>``` as a prop, placed into the value attribute.