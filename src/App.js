import { useEffect, lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetch } from './redux/auth/auth-operations';

import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import AppBar from './components/AppBar';
// import ContactForm from './components/ContactForm';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

const HomePageView = lazy(() => import('./views/HomePageView'));
const RegisterPageView = lazy(() => import('./views/RegisterPageView'));
const LoginPageView = lazy(() => import('./views/LoginPageView'));
const ContactsPageView = lazy(() => import('./views/ContactsPageView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  return (
    <MainContainer>
      <PageHeader title="React Homework 08. Phonebook" />

      <Section title={null}>
        <AppBar />
      </Section>

      <Section title={null}>
        <Suspense fallback="Loading...">
          <Switch>
            <PublicRoute path="/" exact>
              <HomePageView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterPageView />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginPageView />
            </PublicRoute>

            {/* <Route path="/" exact>
              <HomePageView />
            </Route>

            <Route path="/register">
              <RegisterPageView />
            </Route>

            <Route path="/login">
              <LoginPageView />
            </Route> */}

            <PrivateRoute path="/contacs">
              <ContactsPageView />
            </PrivateRoute>

            {/* <Route path="/contacs">
              <ContactsPageView />
            </Route> */}

            <Redirect to="/" />
          </Switch>
        </Suspense>
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
