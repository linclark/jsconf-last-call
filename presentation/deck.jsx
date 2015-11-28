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
            Hi, I'm <a href="https://twitter.com/linclark">@linclark</a> and I make <a href="https://twitter.com/codecartoons">@codecartoons</a>.
          </Heading>
          (also, a senior developer tools engineer on @firefox)
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes="I call it the wilds because when you first look at the landscape, it seems to be overflowing with an untamed profusion of different options. It's hard to figure out why you might want to use anyone in particular.">
          <Image src={mapImages.mapNoRegions} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes="When you look closer, you'll see that there are three main ways of doing data and react – flux, Redux, and relay. And there actually easier to understand than you might think. So let's take a quick jaunt through them.">
          <Image src={mapImages.map} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="This whole project started when I was first looking at flux. And I came across this diagram. Now once you understand flocks, this diagram is very clear. But I don't think that when you're fresh completely new to Flux that this is can help you. It just looks like any other box and arrow diagram. But before I talk about how I think this diagram could communicate better, I should start with the problem that flux is trying to solve. <br /><br />Flux and React both come out of Facebook. They were developed side by side to address a particular set of problems that Facebook was seeing.">
          <Image src={fluxImages.diagram} />
        </Slide>
        <Slide transition={["fade"]} notes="Flux and React both come out of Facebook. They were developed side by side to address a particular set of problems that Facebook was seeing.">
          <Image src={fluxImages.message_notification_on} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.message_notification_off} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.message_cycle} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.facebook_cycle} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.model_view1} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.model_view2} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={fluxImages.model_view3} />
        </Slide>
        <Slide>
          <CharacterCard image={fluxImages.action} title="The Action Creator">
            <ListItem>telegraph operator</ListItem>
            <ListItem>formats actions to send to the dispatcher</ListItem>
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
        <Slide transition={["fade"]} notes="So that's Flux and it fixed the cycle and all rejoiced... and created 100 different implementations of it. <br /><br />Now, on to Redux. Redux is a lot like Flux with just a couple of changes....... but if Flux solved the problem, why change it? The guy who created it wanted to make it faster to develop. He had seen two cool debugging techniques in other communities and wanted to bring them to React. These were hot reloading and time travel debugging. But what are they? The changes he made to Flux help with more than just this use case, but I think this is a good one for illustrating them.">
          <Image src={mapImages.fluxMap} height="700px" />
        </Slide>
        <Slide transition={["fade"]} notes="Let's start with hot reloading. Imagine you're developing a todo application. You've added a few todos. Then you change the code for how the todos are added. For example, maybe new todos are added to the back instead of the front. What do you do to see these changes?">
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
        <Slide transition={["fade"]} notes="it passes that state and the action off to something called a reducer. The reducer figures out how the state needs to change in response to the action. You'll remember, this is what we needed to do to support hot reloading.<br /><br />It does another thing. Instead of making changes to the state itself, instead the reducer makes a copy of the state. This makes the time travel debugging easy... you just create an array of each of the state objects."
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
          <Image src={relayImages.wheres_cloud} />
        </Slide>
        <Slide transition={["fade"]} notes="So you have this graph of data in the cloud and you want to bring a small section of it down to use.">
          <Image src={relayImages.wheres_cloud} />
        </Slide>
        <Slide transition={["fade"]} notes="This is what Relay does, it makes the connection between the graph in the cloud and the little bit of the graph that you have in your local cache.<br /><br />You'll notice that these little sections of the graph correlate to different components. That's not just for illustration. Relay, and a technology it depends on, actually break up the graph on a component by component basis.">
          <Image src={relayImages.wheres_cloud} />
        </Slide>
        <Slide transition={["fade"]} notes="In a traditional app, you'd have an endpoint that knows what data to give you. ">
          <Image src={relayImages.wheres_cloud} />
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

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
