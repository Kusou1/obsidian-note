const path = require('path')
const fs = require('fs')

const temp =
`---
annotation-target: {{content}}
---
`
const pdfFolder = '../Attachment'
const mdFolder = '../408'
/**
 * @param {string} src 源目录
 * @param {string} src 目标目录
 *   */
function createMd(src, dest) {
    const create = (createSrc, createDest) => {
        fs.readdir(createSrc, (err, list) => {
            if (err) {
                return
            }
            list.forEach((item) => {
                const ss = path.resolve(createSrc, item)
                fs.stat(ss, (err, stat) => {
                    if (err) {
                        console.log(err)
                    } else {
                        const curSrc = path.resolve(createSrc, item)
                        const curDest = path.resolve(createDest, item).replace('.pdf', '.md')

                        if (stat.isFile() && path.extname(curSrc) == '.pdf') {
                            console.log(curDest, curSrc)
                            let retMd = temp.replace('{{content}}', item)
                            // 将 temp 写入到指定的 md 文件中
                            fs.writeFile(curDest, retMd, (err) => {
                                console.log('md 生成成功了')
                            })
                        } else if (stat.isDirectory()) {
                            fs.mkdirSync(curDest, { recursive: true })
                            create(curSrc, curDest)
                        }
                    }
                })
            })
        })
    }

    fs.access(dest, (err) => {
        if (err) {
            fs.mkdirSync(dest, { recursive: true })
        }
        create(src, dest)
    })
}

createMd(pdfFolder, mdFolder)
