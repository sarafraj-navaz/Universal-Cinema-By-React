import React from 'react'

const HandleOnDoubleClick = () => {
    let handleOnDoubleEvent =(e) =>{
        e.target.style.background="#F4DF4EFF";
        e.target.style.color="#949398FF";
    }
  return (
    <div>
        <div style={{width:"400px", height:"500px", border:"1px solid gray"}} onDoubleClick={handleOnDoubleEvent}>
                Lorem $ ipsum, dolor sit amet consectetur adipisicing elit. Porro eius nulla, accusamus molestias modi ut. Sequi optio,
                corrupti, inventore dolores quaerat maxime velit nobis vero fugiat a adipisci cupiditate laborum necessitatibus at quia
                aperiam placeat nisi? Commodi corrupti iste voluptatibus deleniti autem, nisi maiores, accusantium ipsam quisquam
                delectus voluptates ipsa explicabo distinctio, ratione sed quae id! Voluptatem hic odio quibusdam soluta! Temporibus
                eaque sed doloremque quis qui tenetur, autem exercitationem odio iure harum mollitia distinctio a, tempora dolor nemo
                hic? Beatae doloremque excepturi quidem praesentium consectetur enim necessitatibus sapiente quo consequatur aliquam.
                Necessitatibus minus maxime dolor modi aspernatur optio magni alias eum. Vero voluptatibus ut quibusdam iste ipsum et
                quaerat. Repellat vero suscipit molestiae maiores tempore veniam? Ut culpa quis quibusdam fugit eveniet a quos, porro,
                modi consequatur saepe accusamus ipsum quas, odit beatae labore in omnis quae tempora veritatis. Similique in quis sed
                magni cumque, eveniet porro qui quia esse consequatur laboriosam totam molestias quas repellendus ipsam nesciunt. Amet,
                natus quibusdam rem necessitatibus facilis blanditiis ab iure nihil in voluptatibus doloremque excepturi praesentium
                molestias repellendus qui possimus quasi modi dolor quidem tenetur impedit fugiat dignissimos aut nisi. Aspernatur ea
                eum suscipit modi ullam sunt repellendus accusamus dignissimos numquam quae?
        </div>
    </div>
  )
}

export default HandleOnDoubleClick