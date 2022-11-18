import { Button,Icon} from 'semantic-ui-react'
function ErrorPage(){
    return(
        <div>
            <div class='error-page'>
                <div class="content">
                    <h1 data-text="404"> 404 </h1>
                    <h4 data-text="Oops! Page Not Found"> Oops! Page Not Found </h4>
                    <Button color = "pink" id="btn" animated>
                        <Button.Content visible>
                          <a class='label' href="/" >return to HOME</a>
                        </Button.Content>
                        <Button.Content hidden>
                          <a href="/" ><Icon name='angle double right' color='teal'/></a>
                        </Button.Content>

                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;
