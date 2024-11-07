import classes from './style.module.css'

function PipBoyExample() {
    return (
        <>
            <div className={classes.screen}>
                <p>
                    It was this howling and firing of the guns at Ripley and St.
                    George's Hill that we had heard at Upper Halliford. The
                    Ripley gunners, unseasoned artillery volunteers who ought
                    never to have been placed in such a position, fired one
                    wild, premature, ineffectual volley, and bolted on horse and
                    foot through the deserted village, while the Martian,
                    without using his Heat-Ray, walked serenely over their guns,
                    stepped gingerly among them, passed in front of them, and so
                    came unexpectedly upon the guns in Painshill Park, which he
                    destroyed.
                </p>
                <p style={{textAlign: "right"}}>
                    H. G. Wells - The War of the Worlds, Chapter 15
                </p>
            </div>
        </>
    );
}

export default PipBoyExample;