import DocumentTitle from '../../components/DocumentTitle';

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f0f4f8',
    },
    title: {
        fontWeight: 600,
        fontSize: '3rem',
        textAlign: 'center',
        color: '#333',
        lineHeight: 1.5,
    },
};

export default function HomePage() {
    return (
        <>
            <DocumentTitle>Home</DocumentTitle>
            <div style={styles.container}>
                <h1 style={styles.title}>
                    Welcome to the Task Manager{' '}
                    <span role="img" aria-label="Greeting icon">
                        🚀
                    </span>
                </h1>
            </div>
        </>
    );
}