import React, { Component } from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

import CharacterCard from "./CharacterCard";

function prepImage(name) {
  return require(`./images/${name}.png`).replace("/", "");
}

let mapImages = {};
[
  "me",
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
  "endpoint1",
  "endpoint2",
  "endpoint3",
  "fetching1",
  "fetching2",
  "fetching3",
  "fetching4",
  "fetching5",
  "whats_in_cloud",
  "graph_in_cloud",
  "graph_section_in_cloud",
  "local_cache_with_cloud",
  "local_cache_with_components",
  "local_cache_1",
  "local_cache_2",
  "local_cache_3",
  "local_cache_4",
  "local_cache_5",
  "local_cache_6",
  "local_cache_7",
  "local_cache_8",
  "local_cache_9",
  "local_cache_b1",
  "local_cache_b2",
  "local_cache_b3",
  "local_cache_c0",
  "local_cache_c1",
  "local_cache_c2",
  "local_cache_c3",
  "relayFlow",
  "relayFlow1"
].forEach((name) => relayImages[name] = prepImage(name))

let summaryImages = {};
[
  "summary1",
  "summary2",
  "summary3",
  "summary4",
  "summary5",
  "summary6",
  "summary7",
  "summary8",
  "summary9"
].forEach((name) => summaryImages[name] = prepImage(name))

export default class extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={mapImages.map} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="Hi, I'm Lin Clark<p>Walk you through the wilds</p>" bgImage={mapImages.me}>
          <Heading size="2" padding="0 320px 0 0">
            Hi, I'm <Link href="https://twitter.com/linclark">@linclark</Link> and I make <Link href="https://twitter.com/codecartoons">@codecartoons</Link>.
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes="<ul><li>call it the wilds... untamed profusion<br /><br /></li><li>hard to figure out why you'd want to use</li></ul>">
          <Image src={mapImages.mapNoRegions} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes="<ul><li>look closer, 3 main groupings</li><li>easier to understand than might think</li><li>whirlwind tour<br /><br /></li><li>First was Flux</li><li>kernel of an idea in Flux</li><li>carries through</li></ul>">
          <Image src={mapImages.map} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="And this is it. Don't worry if you don't understand it... this whole project started because I couldn't make sense of this diagram.<ul><li>Once you understand Flux, this diagram is very clear.</li><li>Don't think it helps you wrap head</li><li>Before explaining this diagram, explain the problem<br /><br /></li></ul>Flux and React both come out of Facebook. They were developed side by side to address a particular set of problems that Facebook was seeing.">
          <Image src={fluxImages.diagram} />
        </Slide>
        <Slide transition={["fade"]} notes="Remember a few years ago when you'd go to Facebook and you'd see that you had a new message. Then you'd click on it.">
          <Image src={fluxImages.message_notification_on} />
        </Slide>
        <Slide transition={["fade"]} notes="and no messages. The notification would go away and you'd forget about it and start doing something else... <br /><br />and then it would be back">
          <Image src={fluxImages.message_notification_off} />
        </Slide>
        <Slide transition={["fade"]} notes="you'd keep going around in this cycle. But it wasn't just a cycle for you, the user. It was also a cycle for the team at Facebook.">
          <Image src={fluxImages.message_cycle} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="They'd fix it, and then it would come back again.<ul><li>wanted to fix it once and for all and end the cycle.<br /><br /></li><li>source of problems was way they were handling data</li></ul>">
          <Image src={fluxImages.facebook_cycle} />
        </Slide>
        <Slide transition={["fade"]} notes="<ul><li>They had models</li><li>models would pass data to the views, which would format it<br /><br /></li><li>view provided user interface</li></ul>">
          <Image src={fluxImages.model_view1} />
        </Slide>
        <Slide transition={["fade"]} notes="<ul><li>view data needed to go back to the model</li><li>views updating models<br /><br /></li><li>sometimes model affects other model</li></ul>">
          <Image src={fluxImages.model_view2} />
        </Slide>
        <Slide transition={["fade"]} notes="<ul><li>models updating models</li><li>epic game of pong</li><li>where the ball is going to land.<br /><br /></li><li>Throw in the fact that these updates could be triggered asynchronously</li><li>trigger 2 or more other changes happening concurrently</li><li>bag full of ping pong balls</li><br /><br />Facebook wanted to make this more predictable. They wanted to make it easy to figure out what effects a user interaction would have. And Flux was the way they did that.</ul>">
          <Image src={fluxImages.model_view3} />
        </Slide>
        <Slide transition={["fade"]} notes="<ul><li>back to this diagram</li><li>Flux docs</li><br /><br /><li>unidirectional data flow</li><li>if you don't already understand what the parts do, I don't think this diagram helps you really get it</li><li>It definitely didn't help me.</li><br /><br />What did help me understand Flux was thinking about it as a group of characters, working together as a team to complete some task. So I'm going to introduce you to the cast of characters in my head.">
          <Image src={fluxImages.diagram} />
        </Slide>
        <Slide notes="<ul><li>telegraph operator >>></li><li>other characters come</li> >>></li><br/><br/><li>takes info + formats it so rest of the system can understand</li><li>Each change that the view wants to make... the action creator turns into an object that represents that change.</li><li>object has a type (MESSAGE_CREATE)</li><li>payload</li><li>You define list</li><li>neat thing</li> >>> <br /><br />......Once it has formatted this, the action creator sends the action off to the dispatcher.">
          <CharacterCard image={fluxImages.action} title="The Action Creator">
            <ListItem>telegraph operator</ListItem>
            <ListItem>formats actions</ListItem>
            <ListItem>provides an API of all possible state changes</ListItem>
          </CharacterCard>
        </Slide>
        <Slide notes="<ul><li>switchboard operator >>>></li><br /><br /><li>big registry of callbacks >>>></li><li>list of stores that it needs to notify of any action.<br /><br /></li><li>Flux dispatcher is different >>>> <br /><br /></li><li>other systems, register for type</li><li>Flux dispatcher sends it to every one</li><li>store's responsibility</li>">
          <CharacterCard image={fluxImages.dispatcher} title="The Dispatcher">
            <ListItem>switchboard operator</ListItem>
            <ListItem>registry of callbacks</ListItem>
            <ListItem>action is dispatched to every registered callback</ListItem>
          </CharacterCard>
        </Slide>
        <Slide notes="I think of the store as an over-controlling bureaucrat. > <br /><br />All state and state-change logic live on the store. > <br /><br />And there are no setters... the only way in is actions. The store basically says No one can change this data except for me, and if you want me to do it for you, you're going to have to go through the official channels.">
          <CharacterCard image={fluxImages.store} title="The Store">
            <ListItem>over-controlling bureaucrat</ListItem>
            <ListItem>all state and state-change logic lives here</ListItem>
            <ListItem>no setters. only way in is actions</ListItem>
          </CharacterCard>
        </Slide>
        <Slide notes="><br /><br />The view is basically a presenter that just takes the data that it's given and turns it into something the user can understand. ><br /><br />It renders the data that it gets from the store > <br /><br />The controller view is a little bit more aware. It basically acts as a middle manager between the store and the presenter. It fetches data from the store and gives it to the view to render.<br /><br />So now lets take a look at how these all work together.">
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

        <Slide transition={["fade"]} notes="So that's Flux and it ended the cycle of brokenness and all rejoiced... and created 100 different implementations of it.">
          <Image src={mapImages.mapNoRegions} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="........Now, on to Redux<ul><li>a lot like Flux</li><li>just a couple of changes<br /><br /></li></li>but if Flux solved the problem, why change it?</li><li>make it faster to develop</li><li>I should note... the changes he made to Flux help with more than just this use case, but I think this is a good one for illustrating them.<br /><br /></li><li>debugging techniques in other communities</li><li>hot reloading and time travel debugging</li></ul>But what are they?">
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
        <Slide transition={["fade"]} notes="through this state. So you can make your change and step back a step to try it again.<br /><br />So what do you need to do to make this work? You can actually kind of see it already in the way I've drawn this. You treat it like an equasion. You take the old state and add the action and get the *new* state. I stress 'new' here because that's the key. You don't make changes to the old state. You output a new object. This is what people talk about with immutability or pure functions.<br /><br />Redux makes it possible for you to do both of these.">
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
        <Slide transition={["fade"]} notes="Now we move on to Relay. If you've been following along closely until now, you might have a question.">
          <Image src={mapImages.fluxReduxMap} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="<ul><li>Where's the cloud?</li><li>Where's interaction with server?</li></ul>">
          <Image src={relayImages.wheres_cloud} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="Flux doesn't have one set place to put interaction wtih the server. Even at Facebook, different teams did it in different parts of the app.">
          <Image src={relayImages.cloudFlux} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="Redux does have a recommended place to put it, but it still requires extra code to wire it up.<br /><br />Relay connects you to the cloud, and it wires it all up for you without you having to write additional code. So let's look at how Relay hooks you up to the cloud, but first we should ask...">
          <Image src={relayImages.cloudRedux} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="What's in the cloud?">
          <Image src={relayImages.whats_in_cloud} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="In the case of an app like Facebook, a huge graph of data.<br /><br />graph like graph theory">
          <Image src={relayImages.graph_in_cloud} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="But when you're showing a page, you only care about a small piece of that graph.">
          <Image src={relayImages.graph_section_in_cloud} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="This is what Relay does, it manages the connection between the graph in the cloud and the little bit of the graph that you have in your local cache.">
          <Image src={relayImages.local_cache_with_cloud} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="It knows how to manage this for you because you declare which bits of the graph each component cares about. So it knows exactly which bits of graph to pull down.<br /><br />Let's compare this with the way communication with the cloud usually happens.">
          <Image src={relayImages.local_cache_with_components} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="The way most people design web apps, you'd have an endpoint that knows what data to give you.<br /><br />You have a component tree. This one has an avatar and a bio.<br /><br />You'll send up a request...">
          <Image src={relayImages.endpoint1} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="and this request is to an endpoint that knows what data you need.">
          <Image src={relayImages.endpoint2} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes=".....This results in coupling between the client and the server. You have to update code on both whenever you want to change what the client shows.">
          <Image src={relayImages.endpoint3} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="Relay fixes this by having the component say exactly what bit of the graph it cares about.">
          <Image src={relayImages.fetching1} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.fetching2} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.fetching3} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.fetching4} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.fetching5} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="Then it gets added to your local cache. <br /><br />When you have this kind of structure, it enables really cool things. Having your component say exactly what data it corresponds to in the graph makes it possible to automatically do things like....">
          <Image src={relayImages.local_cache_1} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.local_cache_2} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.local_cache_3} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.local_cache_4} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.local_cache_5} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="splitting up the query into the bit of the graph that you need immediately so you can start rendering">
          <Image src={relayImages.local_cache_6} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="and the bit that you can download later">
          <Image src={relayImages.local_cache_7} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="....<br /><br />It also makes it possible to reduce the size of queries.">
          <Image src={relayImages.local_cache_8} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="....<br /><br />It also makes it possible to reduce the size of queries.">
          <Image src={relayImages.local_cache_9} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="For example, if you already have the data downloaded and in the cache...">
          <Image src={relayImages.local_cache_b1} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="For example, if you already have the data downloaded and in the cache...">
          <Image src={relayImages.local_cache_b2} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="you can remove it from the query. Relay also does this for pending requests. If any of the data in your query has already been requested it will remove it from the query, even though the response hasn't been received yet.">
          <Image src={relayImages.local_cache_b3} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="And it makes it really easy to sync any changes back up to the server. It will even handle optimistic updates, where you update the UI assuming that the request is successful, and then handles it later if the update to the server fails.">
          <Image src={relayImages.local_cache_c0} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.local_cache_c1} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={relayImages.local_cache_c2} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="I don't have enough time to talk about how Relay does this. ">
          <Image src={relayImages.local_cache_c3} width="1000px" />
        </Slide>
        <Slide transition={["fade"]} notes="..........As you see, there are a ton of characters involved here. But I want to point out the thread that ties it to the other two.">
          <Image src={relayImages.relayFlow} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="<ul><li>state is changed using objects that represent the change</li><li>in Flux and Redux, this is an action</li></ul>">
          <Image src={relayImages.relayFlow1} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes="So that's Relay">
          <Image src={mapImages.fluxReduxMap} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes="If you want to dig deeper, I'm going to be publishing a series of posts about Relay starting next week, so follow @codecartoons on Twitter or sign up to the mailing list.">
          <Image src={mapImages.map} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="So let's review. Flux was created to fix the cycle of brokenness that came from unpredicatable data flows. To solve it, it introduced a unidirectional data flow.">
          <Image src={summaryImages.summary1} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={summaryImages.summary2} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={summaryImages.summary3} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={summaryImages.summary4} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={summaryImages.summary5} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={summaryImages.summary6} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={summaryImages.summary7} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={summaryImages.summary8} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={summaryImages.summary9} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="" bgImage={mapImages.me}>
          <Heading size="2" padding="0 320px 0 0">
            Thanks!
          </Heading>
          <Heading size="3" padding="0 320px 0 0">
                      <Link href="https://code-cartoons.com">code-cartoons.com</Link><br />
            <Link href="https://twitter.com/codecartoons">@codecartoons</Link><br />
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
