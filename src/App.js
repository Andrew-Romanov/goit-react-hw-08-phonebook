// import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import Navigation from './components/Navigation';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';

import HomePageView from './views/HomePageView';
import RegisterPageView from './views/RegisterPageView';
import LoginPageView from './views/LoginPageView';

const App = () => {
  return (
    <MainContainer>
      <PageHeader title="React Homework 08. Phonebook" />

      {/* <AppBar /> */}
      <Section title={null}>
        <Navigation />
      </Section>

      <Section title={null}>
        {/* <Suspense fallback="Loading..."> */}
        <Switch>
          <Route path="/" exact>
            <HomePageView />
          </Route>

          <Route path="/register">
            <RegisterPageView />
          </Route>

          <Route path="/login">
            <LoginPageView />
          </Route>

          <Route path="/contacs">{/* <MovieDetailsPageView /> */}</Route>

          <Redirect to="/" />
        </Switch>
        {/* </Suspense> */}
      </Section>

      {/* <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/todos" component={TodosView} />
      </Switch> */}

      {/* <Section title="Add Contact">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <br />
        <ContactList />
      </Section> */}
    </MainContainer>
  );
};

export default App;
