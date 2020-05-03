//rcc:class,  rsc: function
import React, {Component} from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            //input의 네임 값이 여기안으로 들어온다.
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*값이 변경 될 때 마다 값이 변경*/}
                <input name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                       value = {this.state.name} />
                <input name= "phone"
                    placeholder="전화번호"
                       value={this.state.phone}
                       onChange={this.handleChange}

                />
                <button type = "submit">등록</button>
                <div>
                    {this.state.name}{this.state.phone}
                </div>
            </form>

        );
    }
}

export default PhoneForm;
