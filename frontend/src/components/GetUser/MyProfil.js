import React from "react";
import { Button , FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';
import { FaChevronRight } from "react-icons/fa";
import API from "../../utils/API";
import './MyProfil.css';

export class MyProfil extends React.Component {

    //ici, nous avons les éléments concernant la récupération des infos de notre user sélectionné
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
      }

    async componentDidMount() {
        let userId = this.props.match.params.id;
        let user = await API.getByIdUser(userId);
        let data = user.data;
        console.log(data);
        this.setState({ user: data });
        console.log(this.state.user);
        }

    //ici, nous devons modifier un ou des éléments du profil existant
    update = async () => {
    const { email, password, cpassword, username } = this.state;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
        const userId = localStorage.getItem("userId");
        const { data } = await API.updateUser(userId, { email, password, username });
        window.location = "/dashboard";
    } catch (error) {
        console.error(error);
    }
    };
    handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value
    });
};


    render() {
        let user = <p> Pas de profil disponible ! </p>;
        const {username, email, password, cpassword } = this.state;
        if (this.state.user) {
            user = (
                <div className="MyProfil">
                  <h1 className="Titlecardprofil">{ this.state.user.username }</h1>
                        <div className="Fields">
                            <p>Id : {this.state.user._id}</p>
                            <p>Pseudo : {this.state.user.username}</p>
                            <p>Email : { this.state.user.email }</p>
                            <p>Mot de passe : déhashMdP ?</p>
                            <p>Profil crée le : { this.state.user.created_at }</p>
                            <h3 className="Question">Besoin de modifier vos informations ? <FaChevronRight color="#1a936f" size={25}/></h3>
                        </div>
                </div>
            )
        }
        return (
            <div >
                <Container className="Allpage">
                <Row>
                    <Col md={6}>{user}</Col>
                    <Col md={6}>
                    <div className="Update">
                        <FormGroup controlId="username" >
                            <FormLabel>Pseudo</FormLabel>
                            <FormControl className="updateInput"
                            autoFocus
                            value={username}
                            onChange={this.handleChange}
                            type="string"
                            />
                        </FormGroup>
                        <FormGroup controlId="email" >
                            <FormLabel>Email</FormLabel>
                            <FormControl className="updateInput"
                            autoFocus
                            type="email"
                            value={email}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" >
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl className="updateInput"
                            placeholder="votre mot de passe"
                            value={password}
                            onChange={this.handleChange}
                            type="password"
                            />
                        </FormGroup>
                        <FormGroup controlId="cpassword" >
                            <FormLabel>Confirmation mot de passe</FormLabel>
                            <FormControl className="updateInput"
                            placeholder="de nouveau : votre mot de passe"
                            value={cpassword}
                            onChange={this.handleChange}
                            type="password"
                            />
                        </FormGroup>
                        <Button className="updateButton" onClick={this.update} type="submit">Modifier mes informations</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
            )
        }
}
export default MyProfil;
