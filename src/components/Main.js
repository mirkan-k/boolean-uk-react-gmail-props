import Email from './Email'

export default function Main(props) {
    const {toggleRead, toggleStar, filteredEmails} = props

    return (
        <main className="emails">
            <ul>
            {filteredEmails.map((email, index) => (
                <li
                  key={index}
                  className={`email ${email.read ? 'read' : 'unread'}`}
                >
                    <Email email={email} toggleRead={toggleRead} toggleStar={toggleStar}/>
                </li>
            ))}
            </ul>
        </main>
    )
}