import './LoginBox.css'

const LoginBox = () => {
    return (
        <div className="container-login-box">

            <div class="login-box">
                <h2>Login</h2>
                <form style={{minHeight:"30vh"}}>
                    <div class="user-box">
                        <input type="text" name="" required />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required />
                        <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>

    )
}

export default LoginBox;