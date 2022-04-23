import NeonButton from "@/Buttons/NeonButton/NeonButton"
import './SignInNeon.css'

const SignInNeon = () => {
    return (
        <div className="signInNeonContainer">
            <div id="myContainer">
                <div className="login-box">
                    <h2>Sign-In</h2>
                    <form>
                        <div className="user-box">
                            <input
                                type="text"
                                name="email"
                                // value={this.state.email}
                                // onChange={this.handleEmail}
                                required
                            ></input>
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="password"
                                name="password"
                                // value={this.state.password}
                                // onChange={this.handlePassword}
                                required
                            ></input>
                            <label>Password</label>
                        </div>
                        <NeonButton
                            //  click={this.buttonIsClick} 
                            text="Sign-in"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignInNeon