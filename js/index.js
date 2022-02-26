$(function(){
    let board = $('.board'),
        rook;
    
    function drawBoard(){
        for(let i=0; i<8; i++){
            board.append("<div class='row'></div>")
        }

        let row = $(".row")

        row.each(function(){
            row.append("<div class='cell'></div>")
        })
    }

    drawBoard();

    $(".row").first().find(".cell").first().append('<div class="rook rook-black"></div>')
    $(".row").last(1).find(".cell").first().append('<div class="rook rook-white"></div>')

    $(document).on("click", ".rook", function(){
        rook = $(this);
        let celIndex = rook.closest(".cell").index()
            rows = $(".row").length;
            cells = rook.closest(".row").find(".cell").length;

            rowCountTop = rook.closest(".row").index(),
            rowIndexTop = rook.closest(".row").index()-1
            rowCountBottom = rows - (rook.closest(".row").index()+1)
            rowIndexBottom = rook.closest(".row").index()+1
            cellCountLeft = rook.closest(".cell").index()
            cellIndexLeft = rook.closest(".cell").index()-1
            cellCountRight = cells - (rook.closest(".cell").index()+1)
            cellIndexRight = rook.closest(".cell").index()+1

            flagTop = true
            flagBottom = true
            flagLeft = true
            flagRinght = true

            $(".cell").removeClass("walk")

            for(let i = 0; i < rowCountTop; i++){
                let walkCell = $(".row").eq(rowIndexTop).find(".cell").eq(celIndex);
                
                if(!walkCell.children().length){
                    if(flagTop) walkCell.addClass("walk")
                }else{
                    flagTop = false
                }
                rowIndexTop -=1
            }

            for(let i = 0; i < rowCountBottom; i++){
                let walkCell = $(".row").eq(rowIndexBottom).find(".cell").eq(celIndex);
                
                if(!walkCell.children().length){
                    if(flagBottom) walkCell.addClass("walk")
                }else{
                    flagBottom = false
                }
                rowIndexBottom+=1
                
            }

            for(let i = 0; i < cellCountLeft; i++){
                let walkCell = rook.closest(".row").find(".cell").eq(cellIndexLeft)

                if(!walkCell.children().length){
                    if(flagLeft) walkCell.addClass("walk")
                }else{
                    flagLeft = false
                }
                cellIndexLeft -=1
            }

            for(let i = 0; i < cellCountRight; i++){
                let walkCell = rook.closest(".row").find(".cell").eq(cellIndexRight)
                if(!walkCell.children().length){
                    if(flagRinght) walkCell.addClass("walk")
                }else{
                    flagRinght = false
                }
                cellIndexRight +=1
            }
     
    })

    $(document).on("click", ".walk", function(){
        rook.remove();
        rook.clone().appendTo($(this))
        $(".cell").removeClass("walk")
    })

})