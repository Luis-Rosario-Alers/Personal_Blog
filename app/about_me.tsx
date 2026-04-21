import Image from "next/image"

export default function About() {
    return (
        <div style={{display: 'flex',
            flexDirection: 'column',
            gap: '10',
            width: 'fit-content',
            outline: 'dashed red',
            alignItems: 'center',
        fontFamily: 'cursive'
        }}>
            <Image
                src={"/profile_pic.jpg"}
                alt={"Profile Picture of me."}
                width={150}
                height={150}
                className={'rounded-full object-cover aspect-square'}
                style={{display: 'block', }}
             />
            <div style={{alignSelf: 'flex-start'}}>About me:</div>
            <div id={"bio"}>Hello my name is Luis and sometimes this coding stuff gets to me...</div>
            <div>Socials here.</div>
        </div>
    );
}
