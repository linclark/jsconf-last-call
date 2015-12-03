import React, { Component } from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

import CharacterCard from "./CharacterCard";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg")
};

function prepImage(name) {
  return require(`./images/${name}.png`).replace("/", "");
}

let mapImages = {};
[
  "map",
  "mapNoRegions",
  "fluxMap",
  "fluxReduxMap"
].forEach((name) => mapImages[name] = prepImage(name))

let fluxImages = {};
[
  "diagram",
  "message_notification_on",
  "message_notification_off",
  "message_cycle",
  "facebook_cycle",
  "model_view1",
  "model_view2",
  "model_view3",
  "action",
  "store",
  "dispatcher",
  "view",
  "flux_flow_0",
  "flux_flow_1",
  "flux_flow_2",
  "flux_flow_3",
  "flux_flow_4_5",
  "flux_flow_6",
  "flux_setup_1",
  "flux_setup_2_3",
  "flux_setup_4"
].forEach((name) => fluxImages[name] = prepImage(name))

let reduxImages = {};
[
  "hotreload1",
  "hotreload2",
  "hotreload3",
  "hotreload4",
  "hotreload5",
  "hotreload6",
  "timetravel1",
  "timetravel2",
  "timetravel3",
  "timetravel4",
  "timetravel5",
  "timetravel6",
  "reduxFlow",
  "reducers",
  "viewlayerbinding"
].forEach((name) => reduxImages[name] = prepImage(name))

let relayImages = {};
[
  "wheres_cloud",
  "cloudFlux",
  "cloudRedux",
  "underfetching",
  "overfetching"
].forEach((name) => relayImages[name] = prepImage(name))

preloader([images.city, images.kat]);

export default class extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={mapImages.map} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="Hi, I'm Lin Clark<p>Today I'm going to walk you through the wilds of data handling in react...</p>">
          <Heading>
            Hi, I'm <Link href="https://twitter.com/linclark">@linclark</Link> and I make <Link href="https://twitter.com/codecartoons">@codecartoons</Link>.
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes="I call it the wilds because when you first look at the landscape, it seems to be overflowing with an untamed profusion of different options. It's hard to figure out why you might want to use anyone in particular.">
          <Image src={mapImages.mapNoRegions} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes="When you look closer, you'll see that there are three main ways of doing data and react – flux, Redux, and relay. And they are actually easier to understand than you might think. So let's take a quick whirlwind tour through them.<br /><br />The first of these was Flux. I want to start with the kernel of an idea that was the core of Flux...">
          <Image src={mapImages.map} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="and has carried on in part to both Redux and Relay. And this is it. Don't worry if you don't understand it... this whole project started because I couldn't make sense of this diagram.<br /><br />Once you understand Flux, this diagram is very clear. But when you're fresh and completely new to Flux, it just looks like any other box and arrow diagram. So let me start with the problem that flux is trying to solve, and then we'll come back to this diagram. <br /><br />Flux and React both come out of Facebook. They were developed side by side to address a particular set of problems that Facebook was seeing.">
          <Image src={fluxImages.diagram} />
        </Slide>
        <Slide transition={["fade"]} notes="Remember a few years ago when you'd go to Facebook and you'd see that you had a new message. Then you'd click on it.">
          <Image src={fluxImages.message_notification_on} />
        </Slide>
        <Slide transition={["fade"]} notes="and no messages. The notification would go away and you'd forget about it and start doing something else... <br /><br />and then it would be back">
          <Image src={fluxImages.message_notification_off} />
        </Slide>
        <Slide transition={["fade"]} notes="you'd keep going around in this cycle. But it wasn't just a cycle for you, the user. It was also a cycle for the team at Facebook.">
          <Image src={fluxImages.message_cycle} />
        </Slide>
        <Slide transition={["fade"]} notes="They'd fix it, and then it would come back again. So they wanted to fix it once and for all and end the cycle.<br /><br />When they looked at it, they realized that the source of the problems... the thing that was making it so unpredictable, was the way they were handling data.">
          <Image src={fluxImages.facebook_cycle} />
        </Slide>
        <Slide transition={["fade"]} notes="They had models. Those models would pass data to the views, which would format it.<br /><br />The view also provided the user interface, so it would collect data.">
          <Image src={fluxImages.model_view1} />
        </Slide>
        <Slide transition={["fade"]} notes="And the data needed to go back to the model. So you had views updating models.<br /><br />and sometimes a change in one model makes for a change in another...">
          <Image src={fluxImages.model_view2} />
        </Slide>
        <Slide transition={["fade"]} notes="so you have models updating models. All in all, this starts to look like an epic game of pong. It's hard to figure out where the ball is going to land.<br /><br />Throw in the fact that these updates could be triggered asynchronously, so a change could trigger 2 or more other changes happening concurrently. Which is kind of like taking a bag full of ping pong balls and throwing it into your pong game.<br /><br />Facebook wanted to make this more predictable. They wanted to make it easy to figure out what effects a user interaction would have. And Flux was the way they did that.">
          <Image src={fluxImages.model_view3} />
        </Slide>
        <Slide transition={["fade"]} notes="So we're back to this diagram. This is the diagram you'll find if you read the Flux docs. What it's showing you is a unidirectional data flow... the data is only going in one direction. But if you don't already understand what the parts do, I don't think this diagram helps you really get it. It definitely didn't help me.<br /><br />What did help me understand Flux was thinking about it as a group of characters, working together as a team to complete some task. So I'm going to introduce you to the cast of characters in my head.">
          <Image src={fluxImages.diagram} />
        </Slide>
        <Slide>
          <CharacterCard image={fluxImages.action} title="The Action Creator">
            <ListItem>telegraph operator</ListItem>
            <ListItem>formats actions</ListItem>
            <ListItem>provides an API of all possible state changes</ListItem>
          </CharacterCard>
        </Slide>
        <Slide>
          <CharacterCard image={fluxImages.dispatcher} title="The Dispatcher">
            <ListItem>switchboard operator</ListItem>
            <ListItem>registry of callbacks</ListItem>
            <ListItem>moves actions from creator to stores</ListItem>
            <ListItem>action is dispatched to every registered callback</ListItem>
          </CharacterCard>
        </Slide>
        <Slide>
          <CharacterCard image={fluxImages.store} title="The Store">
            <ListItem>over-controlling bureaucrat</ListItem>
            <ListItem>all state and state-change logic lives here</ListItem>
            <ListItem>no setters. only way in is actions</ListItem>
          </CharacterCard>
        </Slide>
        <Slide>
          <CharacterCard image={fluxImages.view} title="The View and Controller View">
            <ListItem>view is a presenter</ListItem>
            <ListItem>renders data from the store</ListItem>
            <ListItem>controller view is a middle manager</ListItem>
          </CharacterCard>
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_setup_1} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_setup_2_3} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_setup_4} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_flow_0} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_flow_1} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_flow_2} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_flow_3} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_flow_4_5} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.flux_flow_6} height="700px" />
        </Slide>

        <Slide transition={["fade"]} notes="">
          <Image src={mapImages.mapNoRegions} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="So that's Flux and it ended the cycle of brokenness and all rejoiced... and created 100 different implementations of it. <br /><br />Now, on to Redux. Redux is a lot like Flux with just a couple of changes....... but if Flux solved the problem, why change it? The guy who created it wanted to make it faster to develop. The changes he made to Flux help with more than just this use case, but I think this is a good one for illustrating them.<br /><br />He had seen two cool debugging techniques in other communities and wanted to bring them to React. These were hot reloading and time travel debugging. But what are they?">
          <Image src={mapImages.fluxMap} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="Let's start with hot reloading. Imagine you're developing a todo application. This is your TodoList object. You've added a few todos. Then you change the code for how the todos are added. For example, maybe new todos are added to the back instead of the front. What do you do to see these changes?">
          <Image src={reduxImages.hotreload1} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="You refresh. But when you do...">
          <Image src={reduxImages.hotreload2} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="you lose the state. Now you have to add those todos back to get into the state you were in before. But you can avoid this problem.">
          <Image src={reduxImages.hotreload3} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="If you split out the logic from the state and have them on separate objects...">
          <Image src={reduxImages.hotreload4} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="then you can reload the object that has the logic, and get that new functionality that you added or fixed...">
          <Image src={reduxImages.hotreload5} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="but you don't have to reload the object that has the state. This helps you debug things faster because you don't have to reproduce the state between different attempts.<br /> <br />Time travel debugging is kind of similar.">
          <Image src={reduxImages.hotreload6} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="Let's say that your UI is in a certain state...">
          <Image src={reduxImages.timetravel1} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="and then you take an action like adding a todo...">
          <Image src={reduxImages.timetravel2} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="This results in the UI being in a different state.">
          <Image src={reduxImages.timetravel3} height="700px" />
        </Slide> 
        <Slide transition={["fade"]} notes="You do this a couple more times. For example, you cross out the todo and...">
          <Image src={reduxImages.timetravel4} height="700px" />
        </Slide> 
        <Slide transition={["fade"]} notes="add a new one. What if the bug happens there... when the first todo is crossed out and then another one is added. What time travel debugging let's you do is step backwards...">
          <Image src={reduxImages.timetravel5} height="700px" />
        </Slide> 
        <Slide transition={["fade"]} notes="through this state. So you can make your change and step back a step to try it again. Redux makes it possible for you to do both of these.">
          <Image src={reduxImages.timetravel6} height="700px" />
        </Slide> 
        <Slide transition={["fade"]} notes="I'm not going to dive too deep into a detailed walk through of Redux. It mostly looks like Flux. I've written this all up, you can read the post on code-cartoons.com. I do want to point out two of the key differences.......... The first is that the way the store works. Instead of managing the logic, the store just holds on to the state. It holds all of the state in a single tree, and when an action comes in...">
          <Image src={reduxImages.reduxFlow} width="1200px" />
        </Slide> 
        <Slide transition={["fade"]} notes="it passes that state and the action off to something called a reducer. The reducer figures out how the state needs to change in response to the action. You'll remember, this is what we needed to do to support hot reloading.<br /><br />It does another thing. Instead of making changes to the state itself, instead the reducer makes a copy of the state. This makes the time travel debugging easy... you just create an array of each of the state objects.">
          <Image src={reduxImages.reducers} width="1200px" />
        </Slide> 
        <Slide transition={["fade"]} notes="There's another difference between Flux and Redux. That's the way that state is sent from the store to the view layer. ">
          <Image src={reduxImages.viewlayerbinding} width="1200px" />
        </Slide>
        <Slide transition={["fade"]} notes="And that's Redux...">
          <Image src={mapImages.fluxMap} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="If you've been following along closely until now, you might have a question.">
          <Image src={mapImages.fluxReduxMap} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="Where's the cloud?">
          <Image src={relayImages.wheres_cloud} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="Flux doesn't have one set place to put interaction wtih the server. Even at Facebook, different teams did it in different parts of the app.">
          <Image src={relayImages.cloudFlux} />
        </Slide>
        <Slide transition={["fade"]} notes="Redux does have a recommended place to put it, but it still requires extra code to make it work seamlessly.">
          <Image src={relayImages.cloudRedux} />
        </Slide>
        <Slide transition={["fade"]} notes="What's in the cloud? In the case of an app like Facebook, a huge graph of data.">
        </Slide>
        <Slide transition={["fade"]} notes="So you have this graph of data in the cloud and you want to bring a small section of it down to use.">
        </Slide>
        <Slide transition={["fade"]} notes="This is what Relay does, it makes the connection between the graph in the cloud and the little bit of the graph that you have in your local cache.<br /><br />You'll notice that these little sections of the graph correlate to different components. That's not just for illustration. Relay, and a technology it depends on, actually break up the graph on a component by component basis.">
        </Slide>
        <Slide transition={["fade"]} notes="In a traditional app, you'd have an endpoint that knows what data to give you. ">
        </Slide>
        <Slide transition={["fade"]} notes="underfetching">
          <Image src={relayImages.underfetching} />
        </Slide>
        <Slide transition={["fade"]} notes="overfetching">
          <Image src={relayImages.overfetching} />
        </Slide>
        <Slide transition={["fade"]} notes="Relay fixes this by having the component say exactly what bit of the graph it cares about.">
          <Image src={relayImages.wheres_cloud} />
        </Slide>
        <Slide transition={["fade"]} notes="When you have this, it enables really cool things. Having your component say exactly what data it corresponds to in the graph makes it possible to automatically do things like....">
          <List>
            <ListItem>download the bits of the graph that you need</ListItem>
            <ListItem>cache those bits of graph</ListItem>
            <ListItem>make requests smaller by removing parts of the graph you already have cached (or are on their way)</ListItem>
            <ListItem>split queries up into the data that you need immediately and data that can be deferred</ListItem>
            <ListItem>sync any changes to the graph back up to the server</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} notes="I don't have enough time to talk about how Relay does this, but I'm putting out a series of posts about it.">
          <Image src={relayImages.wheres_cloud} />
        </Slide>
      </Deck>
    );
  }
}
