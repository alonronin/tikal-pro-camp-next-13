import './styles.css';
import { Navigation } from './Navigation';

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Welcome to new NX</title>
      </head>
      <body>
        <Navigation
          items={[
            { id: '1', label: 'Home', href: '/', exact: true },
            { id: '2', label: 'Posts', href: '/posts' },
            { id: '3', label: 'Users', href: '/users' },
            { id: '4', label: 'Todos', href: '/todos' },
          ]}
        />
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
